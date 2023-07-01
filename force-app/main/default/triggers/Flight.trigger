trigger Flight on Flight__c (before insert,after insert) {
    if(Trigger.isInsert){
        if(Trigger.isBefore){
            FlightTicketHandler.beforeInsert(Trigger.new);
        }
    }
    

}