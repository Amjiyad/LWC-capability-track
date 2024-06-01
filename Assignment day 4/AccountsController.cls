public with sharing class AccountsController {
    public AccountsController() {

    }
    @AuraEnabled
    public static List<Account> getAccounts(){
        return [select id,Name from Account Limit 5];

    }

    @AuraEnabled
    public static Contact createContact(id accountId, String lastName, String title, String email,String phone){
        Contact c=new Contact();
        c.AccountId=accountId;
        c.LastName=lastName;
        c.Title=title;
        c.Email=email;
        c.Phone=phone;
        insert c;
        return c;

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsByAccountId(Id accountId){
        return [SELECT id,Name,Title,Phone,Email,Owner.Name FROM Contact WHERE AccountId=:accountId];
    }
}