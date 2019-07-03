# Cross-government data description language demo

The UK Government Digital Service (GDS) has defined an initial data description language based on international standards and use cases. This language aims to make describing data across government simpler and more consistent.

You can use the [`data-standards-demo-content` GitHub repository](https://github.com/alphagov/data-standards-demo-content) to try this data description language. This repository contains code that allows you to:

- set up a form to generate data description information and associate this information with an Excel data file
- import data from an Excel data file using associated data description information      

This currently only works with Excel data files.

This is a work in progress, and will be regularly iterated and updated.

## Before you start

You must have installed the following software on your local machine:

- [Python 3.7](https://www.python.org/downloads/)
- [pandas 0.24.2](https://pandas.pydata.org/)
- [openpyxl 2.6.2](https://pypi.org/project/openpyxl/#files)

## Generate data description information and associate this information with a data file

You generate data description information for an Excel data file by completing the __Generate your Data Definition File__ form. You then associate this data description information with the Excel data file.  

1. Download the [`data-standards-demo-content` GitHub repository](https://github.com/alphagov/data-standards-demo-content) on to your local machine.

1. Open the `HTML_Content` folder in your local repository.

1. Run the `ConfigDDFile.html` file in your browser to open the __Generate your Data Definition File__ form.

    If the form does not load correctly, open the `ConfigDDFile.html` file in a development environment, and check that the path references at the start of the file are correct.

1. Complete the following fields in the __Generate your Data Definition File__ form.

    |Field|Definition|Example|
    |:---|:---|:---|
    |creator|An entity primarily responsible for making the data file|creator:"John Smith john.smith@digital.cabinet-office.gov.uk"|
    |contributor|An entity responsible for making contributions to the data file|contributor:”jane.smith@company.co.uk”|
    |title|A name given to the data file|title:"GDS Employees"|
    |created|Date of creation of the data file|created:2002-10-02|
    |identifier|An unambiguous reference to the data file within a given context|identifier:"0000015_GDS_SDA_XLS"|
    |description|An account of the data file|description:"All heights at GDS"|

You do not need to complete the following fields because GDS has not yet implemented them:

- __Choose file__ button
- __Select your file type:__ field
- __Set the properties of your columns:__ field
- __Save Data Description File__ button

You can then either:

- generate a data description file
- copy the data description information to the clipboard

### Generate a data description file

1. Select the __Generate Description File__ button to generate a data description file.

1. Associate the data description file with the Excel data file.

### Copy the data description information

1. Select the __Copy Data Description File__ button. This copies the data description information to the clipboard.

1. Associate the data description information with the Excel data file. For example, you can copy this information into a worksheet in the Excel data file.

## Import data from a data file using associated data description information

If an Excel data file has associated data description information, you can use that data description information to automatically read data from that data file.

The way you read the data from the Excel data file depends on where the associated data description information is. The data description information is usually held in:

- a separate data description file
- one of the Excel data file worksheets

You cannot currently specify which data you want. You must read all data from an Excel data file.

### Read data using a separate data description file

1. Open the `Python Code` folder in your local [`data-standards-demo-content` GitHub repository](https://github.com/alphagov/data-standards-demo-content).

1. Open the `externalfile.py` file.

1. Enter the location of the data description file into the `externalfile.py` file:

    ```python
    def gettxt():
    df = pd.read_csv('DATA_DESCRIPTION_FILE_LOCATION', header=None)
    return df
    ```

    For example:

    ```python
    def gettxt():
    df = pd.read_csv('/Users/johnsmith/Projects/ExcelExport/metadata2', header=None)
    return df
    ```

1. Enter the location of the Excel data file into the `externalfile.py` file:

    ```python
    # This will get the file, initial we have a default file, later we will allow them to input
    def getfile():
    #wb = opxl.load_workbook('/Users/xxx/Downloads/Excel Import Text.xlsx')
    wb = opxl.load_workbook('EXCEL_DATA_FILE_LOCATION')
    #wb = opxl.load_workbook('/Users/xxx/Projects/ExcelExport/GTest.xlsx')
    return wb
    ```

    For example:

    ```python
    # This will get the file, initial we have a default file, later we will allow them to input
    def getfile():
    #wb = opxl.load_workbook('/Users/xxx/Downloads/Excel Import Text.xlsx')
    wb = opxl.load_workbook('/Users/johnsmith/Projects/ExcelExport/Excel Import Text.xlsx')
    #wb = opxl.load_workbook('/Users/xxx/Projects/ExcelExport/GTest.xlsx')
    return wb
    ```

1. Enter the name of the Excel data file worksheet that contains the data:

    ```python
    ws = wb['DATA_WORKSHEET']
    ```

    For example:

    ```python
    ws = wb['data']
    ```

1. Run the `externalfile.py` file to:

    - extract the required data from the Excel data file
    - print the extracted data to the command line
    - create an extracted data `.csv` file in the same location as the `externalfile.py` file

You can add references to multiple data and data description files to the `externalfile.py` file. However, GDS has not implemented looping functionality yet.

### Read data from data description information in the Excel data file

1. Open the `Python Code` folder in your local [`data-standards-demo-content` GitHub repository](https://github.com/alphagov/data-standards-demo-content).

1. Open the `excelImportoriginal.py` file.

1. Enter the location of the Excel data file into the `excelImportoriginal.py` file:

    ```python
    # This will get the file, initial we have a default file, later we will allow them to input
    def getfile():
    #wb = opxl.load_workbook('/Users/xxx/Downloads/Excel Import Text.xlsx')
    wb = opxl.load_workbook('EXCEL_DATA_FILE_LOCATION')
    return wb
    ```

    For example:

    ```python
    # This will get the file, initial we have a default file, later we will allow them to input
    def getfile():
    #wb = opxl.load_workbook('/Users/xxx/Downloads/Excel Import Text.xlsx')
    wb = opxl.load_workbook('/Users/johnsmith/Downloads/ExcelImport2.xlsx')
    return wb
    ```

1. Enter the name of the worksheet that contains the data description information into the `excelImportoriginal.py` file:

    ```python
    wst = wb['DATA_DESCRIPTION_INFORMATION_WORKSHEET']
    ```

    For example, if the data description information worksheet is named `datadesc`:

    ```python
    wst = wb['datadesc']
    ```

1. Run the `excelImportoriginal.py` file to:

    - extract the required data from the Excel data file
    - print the extracted data to the command line

You can find an example Excel data file with included data description information in the `SampleFiles` folder of the repository.

You can add references to multiple data files to the `excelImportoriginal.py` file. However, GDS has not implemented looping functionality yet.

There are no restrictions or requirements on the:
- name of the Excel data file
- location of the data description information within the data description worksheet

## Further information

For more information on data standards in government, refer to the:

- GDS technology blog on [helping us improve government data standards](https://technology.blog.gov.uk/2019/06/26/help-us-improve-government-data-standards/)

- data in government blog on [improving how we manage spreadsheet data](https://dataingovernment.blog.gov.uk/2019/06/10/improving-how-we-manage-spreadsheet-data/)

For more information on the data description language field names and definitions, refer to the:

- [Dublin Core Metadata Initiative terms](http://www.dublincore.org/specifications/dublin-core/dcmi-terms/)
- [Schemas for Tabular Data Challenge](https://github.com/alphagov/open-standards/issues/40#issuecomment-504323302)

## Contributing

We want to get as much feedback as possible from data practitioners across government. You can:

- comment on the [data standards proposal](https://github.com/alphagov/open-standards/issues/40#issuecomment-504323302)
- raise an issue against the code in this repository

We would also like you to join us in community events and workshops to discuss options and ideas. Please contact [data-standards@digital.cabinet-office.gov.uk](mailto:data-standards@digital.cabinet-office.gov.uk) if you’re interested in taking part.

## Licence

Unless stated otherwise, the codebase is released under the [MIT License](https://github.com/alphagov/paas-tech-docs/blob/master/LICENSE). This covers both the codebase and any sample code in the documentation. 

The documentation is [&copy; Crown copyright](http://www.nationalarchives.gov.uk/information-management/re-using-public-sector-information/copyright-and-re-use/crown-copyright/) and available under the terms of the [Open Government 3.0](https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/) licence.
