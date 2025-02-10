<template>
    <div class="footerContainer">
            <div class="headerLogo">
                <a href="/home" className="headerLink _Logo">Logo</a>
            </div>
           
             <div class="social-links">
                <a href="https://t.me/@alexname04" target="_blank">Telegram</a>
                <a href="https://github.com/aleksname" target="_blank">GitHub</a>
                <a href="mailto:awawpep@gmail.com">Email</a>
            </div>
        </div>
</template>
<style>
    .footerContainer{
        padding: 30px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    
    ._Logo{
        font-size: 22px;
        font-weight: 700;
    }
    ._Logo:hover{
        border: none;
    }
    .social-links a {
        margin-right: 15px;
        text-decoration: none;
        color: #007bff;
        font-weight: bold;
    }
</style>