#!/bin/bash

# Define colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Function to print messages with colors
print_message() {
    local message=$1
    local color=$2
    echo -e "${color}${message}${NC}"
}

# Function to check if package.json exists
check_package_json() {
    if [ ! -f "package.json" ]; then
        print_message "Error: No package.json found in the frontend directory." ${RED}
        exit 1
    fi
}

# Change directory to frontend
print_message "Changing directory to frontend..." ${YELLOW}
cd frontend || {
    print_message "Error: Failed to change directory to frontend." ${RED}
    exit 1
}
print_message "Successfully changed directory to frontend." ${GREEN}

# Print current directory for debugging
print_message "Current directory: $(pwd)" ${YELLOW}

# Check if package.json exists before installing dependencies
check_package_json

# Install dependencies using bun
print_message "Installing dependencies using bun..." ${YELLOW}
bun install || {
    print_message "Error: Failed to install dependencies." ${RED}
    exit 1
}
print_message "Dependencies installed successfully." ${GREEN}

# Prompt user for selection
print_message "Please select an option:" ${YELLOW}
echo "1. Run a JavaScript file"
echo "2. Run a TypeScript file"
echo "3. Run a package.json script"
read -p "Enter your choice (1/2/3): " choice

case $choice in
    1)
        read -p "Enter the path to the JavaScript file (e.g., ./index.js): " js_file
        print_message "Running JavaScript file: ${js_file}..." ${YELLOW}
        bun run ${js_file} || {
            print_message "Error: Failed to run JavaScript file." ${RED}
            exit 1
        }
        print_message "JavaScript file ran successfully." ${GREEN}
        ;;
    2)
        read -p "Enter the path to the TypeScript file (e.g., ./index.tsx): " ts_file
        print_message "Running TypeScript file: ${ts_file}..." ${YELLOW}
        bun run ${ts_file} || {
            print_message "Error: Failed to run TypeScript file." ${RED}
            exit 1
        }
        print_message "TypeScript file ran successfully." ${GREEN}
        ;;
    3)
        read -p "Enter the package.json script to run (e.g., dev, lint): " script_name
        print_message "Running package.json script: ${script_name}..." ${YELLOW}
        bun run ${script_name} || {
            print_message "Error: Failed to run package.json script." ${RED}
            exit 1
        }
        print_message "Package.json script ran successfully." ${GREEN}
        ;;
    *)
        print_message "Invalid choice. Please select a valid option." ${RED}
        exit 1
        ;;
esac
