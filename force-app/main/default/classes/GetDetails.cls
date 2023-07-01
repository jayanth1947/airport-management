public with sharing class GetDetails {
    public GetDetails(){  
    }
	@AuraEnabled(cacheable=true)
    public static list<Flight__c> GetFlightDetails(){
        list<Flight__c> allFlightDetails = new list<Flight__c>();
        allFlightDetails= [select Id,
                           			Aeroplane_id__c,
                           			Departure_Date_and_Time__c,
                           			Arrival_Date_and_Time__c,
                           			Fight_id__c,
                           			Name,
                           			From__c,
                           			To__c,
                           			Embed_URL__c
                           from Flight__c
                           limit 10
                          ];
        system.debug(allFlightDetails);
        return allFlightDetails;
    }
    @AuraEnabled(cacheable=true)
    public static list<Flight__c> getFilteredFlights(string fromcity,string tocity){
         list<Flight__c> allFlightDetails = new list<Flight__c>();
         string flightsearch='select Id,Aeroplane_id__c,Arrival_Date_and_Time__c,Departure_Date_and_Time__c,Fight_id__c,Name,From__c,To__c,Embed_URL__c from Flight__c';
         string whereClause = 'WHERE Aeroplane_id__c!=NULL';
        if(string.isNotBlank(fromcity)){
            if(fromcity!='ALL'){
                whereClause=whereClause+' AND From__c=:fromcity';
            }
        }
         if(string.isNotBlank(tocity)){
            if(tocity!='ALL'){
                whereClause=whereClause+' AND To__c=:tocity';
            }
        }
        flightsearch=flightsearch+' '+whereClause;
        system.debug(flightsearch);
        allFlightDetails = Database.query(flightsearch);
        system.debug(allFlightDetails);
        return allFlightDetails;
    }
}