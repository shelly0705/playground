import pathlib
import pandas

CURRENT_FILE = pathlib.Path(__file__).resolve()
DATA_DIR = CURRENT_FILE.parent.parent / "data"


def dicionary_list_to_excel_file(rows, filename):
    dataframe = pandas.DataFrame(rows)
    dataframe.to_excel(DATA_DIR / filename)


# Example usage
my_dicionary_list = [
    {"age": 25, "name": "Shelly"},
    {"age": 30, "name": "Jimmy"},
]
dicionary_list_to_excel_file(my_dicionary_list, "my-excel-file.xlsx")


# Now, define a function `do_my_excel_job`, which do your Excel job for you.
# It fills up a Excel about ordering food, doing it by this order:
# - Ask "How many people are there?"
# - Ask "What is his/her name and what does he/her want"? (Repeating this N times if there are N people)
# - Build a dictionary list inside the function body.
# - Output it as Excel file.




acounts = input("How many people are there?")
acounts = int(acounts)
acount = []
if acount in acounts:
    

names = input("What is his/her name?")

food = input("what does he/her want?")
