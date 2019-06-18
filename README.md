# data-standards-demo-content
This is demo content that we are producing to show some of the potential of introducing a common framework.

1. The first items I have added up are the demo HTML input form in the standard of GOV.UK and some sample python.

The HTML can be run, as is, by copying it to a directory and launching in a browser.

Please ensure the paths work correctly.

This is an initial version signficant work still required:

A. Integration with defining the format of the columns. This shows the potential curently.

B. Saving a file

C. Adding additional components

D. Ensuring that all items here conform to the proposed standard

E. Automatic import of column headers

F. Integration with the CSV elements only the excel items currently work.

2. As I am developing in an agile fashion i have just copied in the python code.

This requires pandas and openpyxl. Please note the current intention is to move all this code to Pandas.

externalfile.py

Both the following functions should show paths to your files


This should hold a copy of the text created with the data input form above.
def gettxt():
    df = pd.read_csv('/Users/xxx/Projects/ExcelExport/metadata2', header=None)
    return df


# This will get the file, initial we have a default file, later we will allow them to input
def getfile():
    #wb = opxl.load_workbook('/Users/xxx/Downloads/Excel Import Text.xlsx')
    wb = opxl.load_workbook('/Users/xxx/Projects/ExcelExport/Excel Import Text.xlsx')
    #wb = opxl.load_workbook('/Users/xxx/Projects/ExcelExport/GTest.xlsx')
    return wb
    
    
excelImportoriginal.py

This has a path to an excel with the front page holding the content. 

Sample excel files will be published shortly.

More detail to follow. 

The intention is to migrate all content to FLASK so everything is working end to end. 

Gareth H 18/06/2019