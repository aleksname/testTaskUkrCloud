<template>
    <div class="headerContainer">
            <div class="headerLogo">
                <a href="/home" className="headerLink _Logo">Logo</a>
            </div>
            <nav className="headerNavContainer">
                <ul className="headerUlContainer">
                    <li className="headerLinkLi"><a href="/products" className="headerLink">Наші продукти</a></li>
                    <li className="headerLinkLi"><a href="/about-us" className="headerLink">Про нас</a></li>
                </ul>
            </nav>
            <div class="">
                <button type="button" className="headerButton">Контакти</button>
            </div>
        </div>
</template>
<style>
    .headerContainer{
        padding: 10px 0;
        margin-bottom: 50px;
    }
    .headerNavContainer{
        background-color: rgba(240, 248, 255, 0);
        padding: 0px;
    }
    .headerContainer{
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    .headerUlContainer{
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    .headerLinkLi{
        margin-right: 80px;
    }
    .headerLinkLi:last-child{
        margin-right: 0;
    }
    .headerLink{
        text-decoration: none;
        color: white;
        padding: 0 4px;
        cursor: pointer;
    }
    .headerLink:hover{
        border-bottom: 1px solid brown;
    }
    ._Logo{
        font-size: 22px;
        font-weight: 700;
        color: white;
    }
    ._Logo:hover{
        border: none;
    }
    .headerButton{
        border: none;
        background-color: #FFD18B;
        padding: 15px 25px;
        border-radius: 6px;
        cursor: pointer;
        transition: 0.2s;
        color: white;
        font-size: 16px;
    }
    .headerButton:hover{
        transform: scale(1.1);
        background-color: #e9bc79;
    }
    .headerButton:active{
        transform: scale(1);
        transition: 0.1s;
        background-color: #ddae69;
    }
    @media(max-width: 1240px){
        .headerContainer{
            margin-bottom: 30px;
        }
    }
    @media(max-width: 750px){
        .headerContainer{
            margin-bottom: 20px;
        }
    }
</style>