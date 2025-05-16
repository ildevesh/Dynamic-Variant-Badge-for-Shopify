# Variant Badge Script

This script adds a small badge next to the product title on a Shopify product page that displays the currently selected color variant. The badge updates automatically whenever a different color option is selected.

## Working

- Listens for changes on product option radios.
- Finds the selected color variant.
- Displays the variant value as a badge next to the product title.

## Usage

1. Add the script on the product page.
2. Ensure your color option inputs have a `name` attribute containing `"Color"`.
3. Make sure the product title element has the class `.product__title`.

The badge styles and position can be customized by modifying the script's CSS in the `updateBadge` function.
