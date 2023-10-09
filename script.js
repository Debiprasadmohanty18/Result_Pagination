let students = [
    {name:"ABHIJIT BARIK",roll_no:"22MC001",regd_no:"221011055660",sec:"A",Sem:"2nd",Marks:"7.43"},
    {name:"ABHISEK MISHRA",roll_no:"22MC002",regd_no:"221011022788",sec:"A",Sem:"2nd",Marks:"9.74"},
    {name:"ADYA ANANYA MISHRA",roll_no:"22MC003",regd_no:"221011014363",sec:"A",Sem:"2nd",Marks:"7.59"},
    {name:"AISHORYA SAHU",roll_no:"22MC004",regd_no:"221011019375",sec:"A",Sem:"2nd",Marks:"8.46"},
    {name:"AJIT KUMAR ROUT",roll_no:"22MC005",regd_no:"221011029891",sec:"A",Sem:"2nd",Marks:"7.89"},
    {name:"AKASH KUMAR PATRA",roll_no:"22MC006",regd_no:"221011003702",sec:"A",Sem:"2nd",Marks:"8.85"},
    {name:"AKASH SHARMA",roll_no:"22MC007",regd_no:"221011062642",sec:"A",Sem:"2nd",Marks:"6,98"},
    {name:"ALEKHA CHANDRA MAHARANA",roll_no:"22MC008",regd_no:"221011011621",sec:"A",Sem:"2nd",Marks:"8.74"},
    {name:"AMARENDRA SAHOO",roll_no:"22MC009",regd_no:"221011052772",sec:"A",Sem:"2nd",Marks:"9.19"},
    {name:"AMITARUP MALLA",roll_no:"22MC010",regd_no:"221011030990",sec:"A",Sem:"2nd",Marks:"9.33"},
    {name:"ANADI PATRA",roll_no:"22MC011",regd_no:"221011001495",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"ANISH KUMAR PANDA",roll_no:"22MC012",regd_no:"221011014314",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"ANKIT KUMAR PRADHAN",roll_no:"22MC013",regd_no:"221011006529",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"ANKIT PAUL",roll_no:"22MC014",regd_no:"221011023899",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"ARUP REDDY",roll_no:"22MC015",regd_no:"2221011021397",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"ASHUTOSH PATTNAIK",roll_no:"22MC016",regd_no:"221011000092",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"AYES KANTA PATI",roll_no:"22MC017",regd_no:"221011019420",sec:"A",Sem:"2nd",Marks:"9.0"},
    {name:"BENUDHAR PANIGRAHI",roll_no:"22MC018",regd_no:"221011017018",sec:"A",Sem:"2nd",Marks:"9.48"},
    {name:"BHAKTI PRIYA MOHANTA",roll_no:"22MC019",regd_no:"221011035389",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BHUMIKA KARAN",roll_no:"22MC020",regd_no:"221011003620",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BIBHUTI BHUSAN NAYAK",roll_no:"22MC021",regd_no:"221011022365",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BIDYUT KUMAR SAHOO",roll_no:"22MC022",regd_no:"221011029214",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BISHNU PRIYA HOTA",roll_no:"22MC023",regd_no:"221011050191",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BISWAJIT BEHERA",roll_no:"22MC024",regd_no:"221011031756",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BISWA RANJAN BEHERA",roll_no:"22MC025",regd_no:"221011025323",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"BUDHIMAN RAJ ROUT",roll_no:"22MC026",regd_no:"221011036159",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"CHINMAYA BEHERA",roll_no:"22MC027",regd_no:"221011025365",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"DAMANU SUSHIL KUMAR DORA",roll_no:"22MC028",regd_no:"221011016756",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"DEBANSHU SHEKHAR NATH",roll_no:"22MC029",regd_no:"221011042035",sec:"A",Sem:"2nd",Marks:"8.87"},
    {name:"DEBASHISH MALLICK",roll_no:"22MC030",regd_no:"221011035183",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"DEBASIS NAYAK",roll_no:"22MC031",regd_no:"221011001356",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"DEBASIS PRADHAN",roll_no:"22MC032",regd_no:"221011002596",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"DEBASIS SATAPATHY",roll_no:"22MC033",regd_no:"221011020105",sec:"A",Sem:"2nd",Marks:"7.81"},
    {name:"DEBENDRA SAMAL",roll_no:"22MC034",regd_no:"221011008884",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"DEBIPRASAD MOHANTY",roll_no:"22MC035",regd_no:"221011027812",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"DIBYA RANJAN SAHU",roll_no:"22MC036",regd_no:"221011031085",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"EVAN PATRA",roll_no:"22MC037",regd_no:"221011061609",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"GEETA RANI PARHI",roll_no:"22MC038",regd_no:"221011017103",sec:"A",Sem:"2nd",Marks:"8.11"},
    {name:"IPSITA APARAJITA SAHOO",roll_no:"22MC039",regd_no:"221011015447",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"JAY PRAKASH PRASAD",roll_no:"22MC041",regd_no:"221011036257",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"JIJNASU KHUNTIA",roll_no:"22MC042",regd_no:"221011020203",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"JYOTI PRAKASH JENA",roll_no:"22MC043",regd_no:"221011029558",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"JYOTI RANJAN GOCHHI",roll_no:"22MC044",regd_no:"221011034550",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"JYOTIRANJAN MOHANTY",roll_no:"22MC045",regd_no:"221011006855",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"KAMAL KRUSHNA SAHU",roll_no:"22MC046",regd_no:"221011005461",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"KAUSHIK KUMAR BHOI",roll_no:"22MC047",regd_no:"221011027986",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"KAUSHIK KUMAR KATIKIA",roll_no:"22MC048",regd_no:"221011010774",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"KAUSIK MOHAPATRA",roll_no:"22MC049",regd_no:"221011027429",sec:"A",Sem:"2nd",Marks:"9.15"},
    {name:"KSHNAPRAVA PATRA",roll_no:"22MC050",regd_no:"221011014191",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"KUMARI YEEREENA PRAHARAJ",roll_no:"22MC051",regd_no:"221011046999",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"LAXMIDHARA SAHOO",roll_no:"22MC052",regd_no:"221011012066",sec:"A",Sem:"2nd",Marks:"9.04"},
    {name:"MADHUSMITA SUTAR",roll_no:"22MC053",regd_no:"221011005926",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MAHESH SANTI",roll_no:"22MC054",regd_no:"221011020679",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MAMALI MANDAL",roll_no:"22MC055",regd_no:"221011052327",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MAMATA PRIYADARSHINI SAHOO",roll_no:"22MC056",regd_no:"221011028806",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MANOJ SWAIN",roll_no:"22MC057",regd_no:"221011035922",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MANORANJAN SAHOO",roll_no:"22MC058",regd_no:"221011023352",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MD GULAM ABDUL QUADIR",roll_no:"22MC059",regd_no:"221011028474",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"MONALISA BEHERA",roll_no:"22MC060",regd_no:"221011034363",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"NIBEDITA NANDA",roll_no:"22MC061",regd_no:"221011041584",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"NIHAR RANJAN PRADHAN",roll_no:"22MC062",regd_no:"221011036941",sec:"A",Sem:"2nd",Marks:"9.93"},
    {name:"NIKESH KUMAR PRADHAN",roll_no:"22MC063",regd_no:"221011005341",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"NILAPU MANARANJANA REDDY",roll_no:"22MC064",regd_no:"221011018613",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"NITASHA DASH",roll_no:"22MC065",regd_no:"221011008840",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"OMKARMAYEE BEHERA",roll_no:"22MC066",regd_no:"221011051915",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"P SAIRAJ ACHARY",roll_no:"22MC067",regd_no:"221011002866",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PALLAVI ACHARYA",roll_no:"22MC068",regd_no:"221011000799",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PALLAVI PRADHAN",roll_no:"22MC069",regd_no:"221011000874",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PRABHUDATTA PATRA",roll_no:"22MC070",regd_no:"221011019534",sec:"A",Sem:"2nd",Marks:"8.59"},
    {name:"PRADYUMNA BEHERA",roll_no:"22MC071",regd_no:"221011037161",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PRADYUMNA KUMAR SAHOO",roll_no:"22MC072",regd_no:"221011029043",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PRANABA BIBHUSITA SAHOO",roll_no:"22MC073",regd_no:"221011006786",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PRITAM ANAND BEURA",roll_no:"22MC074",regd_no:"221011019838",sec:"A",Sem:"2nd",Marks:"9.45"},
    {name:"PRITIKANTA MOHANTY",roll_no:"22MC075",regd_no:"221011014711",sec:"A",Sem:"2nd",Marks:"9.45"}
]

let searchingstudent = students;

let noOfpages = Math.ceil(students.length/10);
let currentpage = 1;

paginate(1)

for(let i=0;i<noOfpages;i++)
{
    let nobtn = document.createElement("button");
    nobtn.innerHTML=i+1;

    nobtn.addEventListener('click',function(){
        currentpage=i+1;
        paginate(i+1);
    })

    document.getElementById('no-btn').appendChild(nobtn);

}

document.getElementById("next").addEventListener('click',function(){

    if(currentpage < noOfpages)
    {
        currentpage++;
        paginate(currentpage);
    }

})


document.getElementById("previous").addEventListener('click',function(){

    if(currentpage > 1)
    {
        currentpage--;
        paginate(currentpage);
    }

})

document.getElementById("search-bar").addEventListener('keyup',function(){

    let val = document.getElementById("search-bar").value ;
    // console.log(val);
    searchingstudent = students.filter(function(students){
        return students.name.toUpperCase().includes(val.toUpperCase());
    })

    // console.log(searchingstudent);
    currentpage=1;
    paginate(1);

})

function paginate(pagenumber)
{

    let startindex = (pagenumber-1)*10;
    let endindex = startindex + 10;
    let sliced = searchingstudent.slice(startindex,endindex);

    document.getElementById("pageno").innerText= currentpage+" of "+noOfpages ;

document.getElementById("table-body").innerHTML="";

        for(i=0;i<sliced.length;i++)
        {
            let row = document.createElement('tr');

        let sltd = document.createElement('td');
        sltd.innerText=startindex+i+1;

        let nametd = document.createElement('td');
        nametd.innerText=sliced[i].name;

        let rolltd = document.createElement('td');
        rolltd.innerText=sliced[i].roll_no;

        let regdtd = document.createElement('td');
        regdtd.innerText=sliced[i].regd_no;

        let sectd = document.createElement('td');
        sectd.innerText=sliced[i].sec;

        let semtd = document.createElement('td');
        semtd.innerText=sliced[i].Sem;

        let marktd = document.createElement('td');
        marktd.innerText=sliced[i].Marks;

        row.append(sltd , nametd , rolltd , regdtd , sectd , semtd , marktd);
        // console.log(row);

        document.getElementById('table-body').appendChild(row);

        }
}