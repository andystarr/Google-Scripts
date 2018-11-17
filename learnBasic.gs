function learnBasic() {

  var app = SpreadsheetApp;
  var ss =app.getActiveSpreadsheet();
  var activeSheet = ss.getActiveSheet();
  
  var tempText = activeSheet.getRange(1, 1).getValue();
  activeSheet.getRange(1,2,3,3).setValue(tempText);
  Logger.log(tempText);
}
