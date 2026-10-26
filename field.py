class Product:
    def __init__(self, name, price, quantity):
        self.name = name
        self.price = price
        self.quantity = quantity

    def subtotal(self):
        return self.price * self.quantity


class ShoppingCart:
    def __init__(self):
        self.products = []

    def add_product(self, product):
        self.products.append(product)

    def calculate_total(self):
        total = 0

        for index in range(1, len(self.products)):
            product = self.products[index]
            total += product.subtotal()

        return total


# Create products
notebook = Product("Notebook", 5, 2)
pen = Product("Pen", 3, 4)
folder = Product("Folder", 8, 1)

# Build the cart
cart = ShoppingCart()
cart.add_product(notebook)
cart.add_product(pen)
cart.add_product(folder)

# Display the products
print("First product:", notebook.name)
print("Last product:", cart.products[2].name)

# Calculate the total
actual = cart.calculate_total()
expected = 30  # Notebook: 10, pens: 12, folder: 8

print("Expected total:", expected)
print("Actual total:", actual)