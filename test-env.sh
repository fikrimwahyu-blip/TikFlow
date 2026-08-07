#!/bin/bash
# Test if environment variables are set correctly

echo "=== Environment Variables Test ==="
echo ""

# Check if .env exists
if [ ! -f .env ]; then
    echo "❌ Error: .env file not found"
    echo "   Run: cp .env.example .env"
    echo "   Then edit .env and add your API key"
    exit 1
fi

echo "✓ .env file exists"
echo ""

# Load .env
source .env

# Check VITE_RAPIDAPI_KEY
if [ -z "$VITE_RAPIDAPI_KEY" ]; then
    echo "❌ VITE_RAPIDAPI_KEY is not set"
    exit 1
elif [ "$VITE_RAPIDAPI_KEY" = "your_rapidapi_key_here" ]; then
    echo "❌ VITE_RAPIDAPI_KEY still has default value"
    echo "   Please edit .env and add your actual API key from RapidAPI"
    exit 1
else
    echo "✓ VITE_RAPIDAPI_KEY is set: ${VITE_RAPIDAPI_KEY:0:20}... (masked)"
fi

# Check VITE_RAPIDAPI_HOST
if [ -z "$VITE_RAPIDAPI_HOST" ]; then
    echo "❌ VITE_RAPIDAPI_HOST is not set"
    exit 1
else
    echo "✓ VITE_RAPIDAPI_HOST is set: $VITE_RAPIDAPI_HOST"
fi

echo ""
echo "✅ All environment variables are configured correctly!"
echo ""
echo "You can now run:"
echo "  npm run dev"
