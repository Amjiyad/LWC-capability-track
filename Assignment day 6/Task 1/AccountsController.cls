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

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContacts(){
        return [SELECT Id,Name FROM Contact];
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactsBySerachKey(String searchKey){
        List<Contact> contacts=new List<Contact>();
        if (String.isBlank(searchKey)) {
            System.debug('search key is blank');
            return contacts;
        }

        String key='%'+searchKey+'%';
        System.debug('search key-'+searchKey);
        contacts = [SELECT Id,Name,Phone,Email FROM Contact WHERE Name LIKE: key];
        System.debug('contacts-'+contacts);
        return contacts;
    }
}