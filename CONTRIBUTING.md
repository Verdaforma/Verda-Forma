# Contributing to Verda Forma

Thank you for your interest in contributing to Verda Forma! This document provides guidelines and instructions for contributing to the project.

## Development Process

1. **Branch Strategy**
   - `main`: Production-ready code
   - `development`: Main development branch
   - Feature branches: Create from `development` with format: `feature/your-feature-name`
   - Bug fix branches: Create from `development` with format: `fix/bug-description`

2. **Setting Up Development Environment**
   ```bash
   # Clone the repository
   git clone https://github.com/Verdaforma/Verda-Forma.git
   cd Verda-Forma

   # Install dependencies
   npm install

   # Create .env file from template
   cp .env.example .env

   # Start development server
   npm run dev
   ```

3. **Code Style**
   - We use ESLint and Prettier for code formatting
   - Run `npm run lint` before committing
   - Run `npm run format` to automatically format code

4. **Testing**
   - Write tests for new features
   - Ensure all tests pass: `npm test`
   - Maintain or improve code coverage

5. **Commit Messages**
   Follow conventional commits format:
   - feat: New feature
   - fix: Bug fix
   - docs: Documentation changes
   - style: Code style changes
   - refactor: Code refactoring
   - test: Test updates
   - chore: Maintenance tasks

6. **Pull Request Process**
   - Create PR against `development` branch
   - Fill out PR template completely
   - Ensure CI checks pass
   - Request review from maintainers
   - Address review comments promptly

7. **Security**
   - Never commit sensitive information
   - Use environment variables for secrets
   - Report security issues privately

## Getting Help

- Create an issue for bugs or feature requests
- Join our development discussions
- Contact the maintainers for guidance

## Code of Conduct

- Be respectful and inclusive
- Follow professional conduct
- Help others learn and grow
- Maintain project quality

Thank you for contributing to Verda Forma!