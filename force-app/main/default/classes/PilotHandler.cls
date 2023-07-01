public class PilotHandler {
    public static void beforeInsert(List<Pilot__c> newList){
        for(Pilot__c pli: newList){
            if(pli.Name=='Aarthi'){
                pli.Designation__c='Pilot';
                pli.Pilot_License__c='AX788964';
                
            }
            else if(pli.Name=='Vimal'){
                pli.Designation__c='Co-pilot';
                pli.Pilot_License__c='FG789204';
            }
            else if(pli.Name=='Jayanth'){
                pli.Designation__c='Co-pilot';
                pli.Pilot_License__c='JA784520';
            }
        }
    }


}