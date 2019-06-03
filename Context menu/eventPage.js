var menuItem = {
    "id": "spendMoney",
    "title": "Copy Text",
    "contexts": ["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){   
    if (clickData.menuItemId == "spendMoney" && clickData.selectionText){    
        if (clickData.selectionText){          
            chrome.storage.sync.get(['total'], function(budget){
                var newTotal = " ";
                if (budget.total){
                    newTotal = budget.total;
                }

                newTotal = clickData.selectionText;
                chrome.storage.sync.set({'total': newTotal});
                });
        }
    }
});