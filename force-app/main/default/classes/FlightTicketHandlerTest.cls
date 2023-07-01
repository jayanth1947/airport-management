@isTest
public class FlightTicketHandlerTest {
    
    @isTest static void testInsert(){
        List<Flight__c> fliList=new List<Flight__c>();
        Flight__c flnew=new Flight__c(Name='Air India');
        fliList.add(flnew);
        Test.startTest();        
        insert fliList;
        Test.stopTest();
     
    }
    @isTest static void testAnother(){
        List<Flight__c> fliList=new List<Flight__c>();
        Flight__c flnew=new Flight__c(Name='Tata Air');
        fliList.add(flnew);
        Test.startTest();        
        insert fliList;
        Test.stopTest();

        
    }

}