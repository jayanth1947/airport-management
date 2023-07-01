public class FlightTicketHandler {
    public static void beforeInsert(List<Flight__c> newList){
        for(Flight__c fli: newList){
            if(fli.Name=='Air India'){
                fli.From__c='Delhi';
                fli.To__c='Bangkok';

            }
            else if(fli.Name=='Tata Air'){
                fli.From__c='Hyderabad';
                fli.To__c='Chennai';
            }
        }
    }

}