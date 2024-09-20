{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";

    rust-dev-tools = {
      url = "github:cfcosta/rust-dev-tools.nix";
      inputs.nixpkgs.follows = "nixpkgs";
      inputs.flake-utils.follows = "flake-utils";
    };

    gitignore = {
      url = "github:hercules-ci/gitignore.nix";
      inputs.nixpkgs.follows = "nixpkgs";
    };

    pre-commit-hooks = {
      url = "github:cachix/pre-commit-hooks.nix";
      inputs = {
        nixpkgs.follows = "nixpkgs";
        gitignore.follows = "gitignore";
      };
    };
  };

  outputs =
    {
      nixpkgs,
      flake-utils,
      pre-commit-hooks,
      ...
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        pre-commit-check = pre-commit-hooks.lib.${system}.run {
          src = ./.;

          hooks = {
            deadnix.enable = true;
            eslint.enable = true;
            nixfmt-rfc-style.enable = true;
            prettier.enable = true;
          };
        };
      in
      {
        checks = {
          inherit pre-commit-check;
        };

        devShells.default = pkgs.mkShell {
          inherit (pre-commit-check) shellHook;

          packages = with pkgs; [
            nodejs
            nodePackages.pnpm
          ];
        };
      }
    );
}
