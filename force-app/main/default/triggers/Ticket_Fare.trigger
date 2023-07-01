trigger Ticket_Fare on Ticket__c (before insert,before update, after update,after insert) {

    
		if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate))
		{
			for(Ticket__c ld : Trigger.New)
			{
                if((ld.From__c=='Chennai') && (ld.To__c=='Kadapa')|| (ld.From__c=='Kadapa') && (ld.To__c=='Chennai')){
                        ld.Fare__c=2000;   
                }
                else if((ld.From__c=='Banglore') && (ld.To__c=='Chennai')|| (ld.From__c=='Chennai') && (ld.To__c=='Banglore')){
                        ld.Fare__c=4000;   
                }
                else if((ld.From__c=='Banglore') && (ld.To__c=='Mumbai') ||(ld.From__c=='Mumabai') && (ld.To__c=='Banglore')){
                        ld.Fare__c=6000;   
                }
				
		}
	}
}