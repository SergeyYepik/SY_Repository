function turnEn(){
    location.href = window.location.pathname + "#" + "en";
    location.reload()
}

function turnUa(){
    location.href = window.location.pathname + "#" + "uk";
    location.reload()
}

changelanguage()

function changelanguage(){
    let hash = window.location.hash
    if (hash == "#en"){
        document.getElementById('dateOfBirth').innerHTML = '<strong>Date of birth: 31.01.1971</strong>'
        document.getElementById('city').innerHTML = '<strong>City:  Cherkasy</strong>'
        document.getElementById('phone').innerHTML = '<strong>Phone: +38 (050) 3634343</strong>'
        document.getElementById('ownerName').innerHTML = 'Sergiy Yepik'
        document.getElementById('education').innerHTML = 'Education'
        document.getElementById('experience').innerHTML = 'Experience'
        document.getElementById('responsibilities').innerHTML = 'Responsibilities'
        document.getElementById('industries').innerHTML = 'Industries'
        document.getElementById('addInfo').innerHTML = 'ADDITIONAL INFORMATION'
    
        document.getElementById('ed_info').innerHTML = '1993, Donetsk State University, Master of Computer Applications - MCA, Information Technology'
        document.getElementById('exp1').innerHTML = '1993 – 2002 – Senior Lecturer, Computer Technology Dept., Donetsk State University'
        document.getElementById('exp2').innerHTML = '2002 – 2005 – Head of IT Dept., Donpromservice-97 LLC'
        document.getElementById('exp3').innerHTML = '2005 – 2008 – CFO Continent group of companies'
        document.getElementById('exp4').innerHTML = '2008 – 2018 – CEO Continent group of companies'
        document.getElementById('exp5').innerHTML = '2012 – 2016 – General Manager Hilal Aluminum Ukraine LLC (part-time)'
        document.getElementById('exp6').innerHTML = '2018 – 2022 – Head of Production Department Continent Group of Companies'
        document.getElementById('resp1').innerHTML = 'Management of a group of companies with a staff of about 2000 people, 12 different industries, more than 10 types of trade (B2B, B2C, contracts with retailers, online trade), import, export.'
        document.getElementById('resp2').innerHTML = 'Formation and implementation of financial strategies of the company, debt control, inventory management.'
        document.getElementById('resp3').innerHTML = 'Management of company assets and liabilities.'
        document.getElementById('resp4').innerHTML = 'Implementation of sales strategies with control over the level of profitability.'
        document.getElementById('resp5').innerHTML = 'Development and management of a branch network.'
        document.getElementById('resp6').innerHTML = "Control of the company's financial statements."
        document.getElementById('ind1').innerHTML = 'PVC extrusion'
        document.getElementById('ind2').innerHTML = 'metallurgy'
        document.getElementById('ind3').innerHTML = 'ALU profiles rolling'
        document.getElementById('ind4').innerHTML = 'window, fasad and fencing constructions'
        document.getElementById('ind5').innerHTML = 'metalworking'
        document.getElementById('ind6').innerHTML = 'woodworking'
        document.getElementById('ind7').innerHTML = 'ceramics'
        document.getElementById('ind8').innerHTML = 'TPA'
        document.getElementById('ind9').innerHTML = 'powder coating of metal'
        document.getElementById('addInfo1').innerHTML = '<strong>Foreign languagies:</strong> English, level B2 '
        document.getElementById('addInfo2').innerHTML = '<strong>Auto:</strong> B1, B, own car '
        document.getElementById('addInfo3').innerHTML = '<strong>Personal skills:</strong> systematic thinking and analytical mind, responsibility, independence in solving problems, motivation to achieve results, sociability, attention to detail, punctuality, optimism'
        document.getElementById('addInfo4').innerHTML = '<strong>Professional qualities:</strong> ability to plan, optimize and execute complex projects based on detailed analysis of business processes, conduct qualitative and structured analysis of reporting and current situation, management of the company in crisis, ability to work with large teams, ability to interest employees in achieving goals'
        document.getElementById('addInfo5').innerHTML = '<strong>Marital status: </strong>married'
        document.getElementById('addInfo6').innerHTML = '<strong>Children:</strong> adult son'
        document.getElementById('addInfo7').innerHTML = '<strong>Hobbies:</strong> foreign languages, sports, tourism'
        document.getElementById('addInfo8').innerHTML = '<strong>Extra interests:</strong> IT, Data Science, Big Data, Neural Networks, JavaScript, Python'
    
        document.getElementById('btnua').innerHTML = 'Download .pdf (ua)'
        document.getElementById('btnen').innerHTML = 'Download .pdf (en)'
    }
    else{
        document.getElementById('ownerName').innerHTML = 'Сергій Єпік'
        document.getElementById('dateOfBirth').innerHTML = '<strong>Дата народження: 31.01.1971</strong>'
        document.getElementById('city').innerHTML = '<strong>Місто:  Черкаси</strong>'
        document.getElementById('phone').innerHTML = '<strong>Моб. телефон: +38 (050) 3634343</strong>'
        document.getElementById('education').innerHTML = 'Освіта'
        document.getElementById('experience').innerHTML = 'Досвід роботи'
        document.getElementById('responsibilities').innerHTML = 'Посадові обов’язки'
        document.getElementById('industries').innerHTML = 'Види виробництва'
        document.getElementById('addInfo').innerHTML = 'ДОДАТКОВА ІНФОРМАЦІЯ'
    
        document.getElementById('ed_info').innerHTML = 'вища, 1993 рік, Донецький державний університет, спеціальність «Прикладна математика», кваліфікація спеціаліста «Математик», диплом з відзнакою КВ № 901384 від «25» червня 1993 року'
        document.getElementById('exp1').innerHTML = '1993 – 2002 – старший викладач кафедри комп’ютерних технологій Донецького національного університету'
        document.getElementById('exp2').innerHTML = '2002 – 2005 – керівник відділу АСУ в ТзОВ Донпромсервіс-97 (група компаній Континент)'
        document.getElementById('exp3').innerHTML = '2005 – 2008 – Фінансовий директор групи компаній Континент'
        document.getElementById('exp4').innerHTML = '2008 – 2018 – Керуючий групи компаній Континент'
        document.getElementById('exp5').innerHTML = '2012 – 2016 – Директор ТзОВ Хілал Алюмініум Юкрейн (за сумісництвом)'
        document.getElementById('exp6').innerHTML = '2018 – 2022 – Директор Виробничого департаменту групи компаній Континент'
        document.getElementById('resp1').innerHTML = 'Керування групою компаній зі штатом близько 2000 осіб, 12 видів виробництва, більше 10 напрямків торгівлі (B2B, B2C, робота з рітейлерами, інтернет-торгівля), імпорт, експорт.'
        document.getElementById('resp2').innerHTML = 'Формування й виконання фінансових стратегій компанії, контроль ДЗ, керування складськими запасами.'
        document.getElementById('resp3').innerHTML = 'Управління всіма активами та зобов’язаннями компанії.'
        document.getElementById('resp4').innerHTML = 'Формування й виконання збутових стратегій з контролем рівня рентабельності. Розбудова й керування мережею філій.'
        document.getElementById('resp5').innerHTML = 'Співпраця з контролюючими та регулюючими державними установами.'
        document.getElementById('resp6').innerHTML = 'Контроль фінансової звітності компанії.'
        document.getElementById('ind1').innerHTML = 'ПВХ екструзія'
        document.getElementById('ind2').innerHTML = 'Металургія'
        document.getElementById('ind3').innerHTML = 'Прокат алюмінієвих профілів'
        document.getElementById('ind4').innerHTML = 'Виробництво ПВХ та АЛЮ конструкцій'
        document.getElementById('ind5').innerHTML = 'Металообробка'
        document.getElementById('ind6').innerHTML = 'Деревообробка'
        document.getElementById('ind7').innerHTML = 'Кераміка'
        document.getElementById('ind8').innerHTML = 'ТПА'
        document.getElementById('ind9').innerHTML = 'Порошкове фарбування металу'
        document.getElementById('addInfo1').innerHTML = '<strong>Знання іноземних мов:</strong> англійська, рівень В2'
        document.getElementById('addInfo2').innerHTML = '<strong>Авто:</strong> кат. B1, B, власне авто.'
        document.getElementById('addInfo3').innerHTML = '<strong>Особисті навички:</strong> системне мислення і аналітичний склад розуму, відповідальність, самостійність у вирішенні завдань, мотивація на досягнення результату, комунікабельність, уважність до деталей, пунктуальність, оптимізм, активність.'
        document.getElementById('addInfo4').innerHTML = 'Професійні якості:</strong> вміння планувати, оптимізувати та виконувати складні проекти на основі детального аналізу бізнес процесів, проводити якісний та структурований аналіз звітності, а також фактичної поточної ситуації, керування компанією в умовах кризи, вміння працювати з великими колективами, вміння зацікавити працівників досягненням мети компанії.'
        document.getElementById('addInfo5').innerHTML = '<strong>Сімейний стан: </strong> одружений'
        document.getElementById('addInfo6').innerHTML = '<strong>Діти:</strong> дорослий син'
        document.getElementById('addInfo7').innerHTML = '<strong>Хобі:</strong> вивчення іноземних мов, спорт, туризм'
        document.getElementById('addInfo8').innerHTML = '<strong>Інші інтереси:</strong> IT, Data Science, Big Data, Neural Networks, JavaScript, Python'
    
        document.getElementById('btnua').innerHTML = 'Скачати .pdf (укр)'
        document.getElementById('btnen').innerHTML = 'Скачати .pdf (eng)'
    }

}

