// nav items selection
var navItems = document.querySelectorAll("nav .nav-item");

navItems.forEach(navItem => {
    if(navItem) {
        navItem.onclick = () => {
            navItems.forEach(navItem => {
                navItem.classList.remove("nav-item_active");
            })
            navItem.classList.add("nav-item_active");
        }
    }
})


// item selection inside the collapsible content
var innerNavItems = document.querySelectorAll(".collapsible-content .nav-item_inner");

innerNavItems.forEach(innerNavItem => {
    if(innerNavItem) {
        innerNavItem.onclick = () => {
            innerNavItems.forEach(innerNavItem => {
                innerNavItem.classList.remove("nav-item_active");
            })
            innerNavItem.classList.add("nav-item_active");
            var content = innerNavItem.nextElementSibling;

            if (content.style.maxHeight){
                content.style.maxHeight = null;
            
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            
            } 
        }
    }
})

// applying collapsible to sidebar nav item
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        
        } 
    });
};

// dropdown functionality
document.addEventListener("click", e => { //full document click
    // console.log(e);
    const isDropdownBtn = e.target.matches("[data-dropdown-btn]"); //recognizing the dropdown btn
    
    // when clicked outside the dropdown return the function
    if(!isDropdownBtn && e.target.closest("[data-dropdown]") != null){
        return;
    }

    let currentDropdown
    if(isDropdownBtn) {
        currentDropdown = e.target.closest("[data-dropdown]"); // that specific dropdown where the dropdown btn has been clicked
        currentDropdown.classList.toggle("menu-open"); // opening downdown content to that specific dropdown
    }

    document.querySelectorAll("[data-dropdown].menu-open").forEach(dropdown => {
        // if clicked to that specific dropdown do nothing & retun the function
        if(dropdown === currentDropdown){
            return;
        }
        dropdown.classList.remove("menu-open"); // closing other dropdown content
    })
})

/* tabs functionality */

var tabs = document.querySelector(".tab-bar");
var tabButton = document.querySelectorAll(".tab-button");
var contents = document.querySelectorAll(".tab-content-wrap .tab-content");

if (tabs) {
    tabs.onclick = e => {
        var id = e.target.dataset.id;
        if (id) {
            tabButton.forEach(btn => {
                btn.classList.remove("active-tab");
            });
            e.target.classList.add("active-tab");

            contents.forEach(content => {
                content.classList.remove("active-content");
            });
            var element = document.getElementById(id);
            element.classList.add("active-content");
        }
    }
}

// opening input text field according to item check
function sendNotification() {
    var checkbox = document.querySelector("[data-checkbox] input");
    var inputField = document.querySelector("[data-field]");

    if(checkbox.checked == true) {
        console.log("checked");
        inputField.classList.add("active");
    } 
    else {
        console.log("unchecked");
        inputField.classList.remove("active");
    }
}

var sidebarOpener = document.querySelector(".responsive-logo");
var sidebar = document.querySelector(".sidebar");
var sidebarBack = document.querySelector(".sidebar .back-button");

if(sidebarOpener) {
    sidebarOpener.onclick = () => {
        sidebar.classList.add("active-sidebar");
    }
}
if(sidebarBack) {
    sidebarBack.onclick = () => {
        sidebar.classList.remove("active-sidebar");
    }
}
