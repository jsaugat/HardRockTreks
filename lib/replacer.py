import json

# Load the JSON data from the file
with open('data.json', 'r') as file:
    data = json.load(file)

# Function to recursively replace 'label' with 'name'


def replace_label_with_name(d):
    if isinstance(d, dict):  # If the item is a dictionary
        # List of keys to modify (avoiding modification during iteration)
        keys_to_modify = list(d.keys())
        print(f"Keys to modify: {keys_to_modify}")
        for key in keys_to_modify:
            print(f"Current key: {key}")
            if key == 'label':  # Replace 'label' with 'name'
                d['name'] = d.pop('label')
                # Debugging print
                print(f"Replaced 'label' with 'name' in key: {key}")
            else:
                # Recursively check the value if it's not 'label'
                replace_label_with_name(d[key])
    elif isinstance(d, list):  # If the item is a list
        for item in d:
            replace_label_with_name(item)  # Recursively check each item


# Replace 'label' with 'name' in the loaded data
replace_label_with_name(data)

# Save the modified data back to a new JSON file
with open('modified_file.json', 'w') as file:
    json.dump(data, file, indent=2)

print("Replaced all 'label' properties with 'name'.")
