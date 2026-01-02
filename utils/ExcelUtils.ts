import xlsx from 'xlsx'

export class ExcelUtils{

    // filePath
    // sheetName

    filePath = "dsfdsf"
    sheetname = "dfgfg"


    static getExcelData(filePath: string, sheetName:string){
        // Exception Handling
        try{
           const workbook =  xlsx.readFile(filePath)
           const sheet = workbook.Sheets[sheetName]        // - {sheetName:value,....}
           const jsonData = xlsx.utils.sheet_to_json(sheet)
           return jsonData
        }
        catch(error){
            console.log(error);
            console.log("File Not Found", filePath);
        }

    }

}