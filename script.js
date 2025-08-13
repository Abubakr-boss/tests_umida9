const questions=[

{q:"DMO (Destination Management Organization) qanday rol o‘ynaydi?",opts:["Arzon narxdagi chiptalarni turli saytlarda sotish imkonini beradi","Barqaror sayohat yo‘nalishlarini muvofiqlashtiradi","Mehmonxonalar qurilishini amalga oshiradi","Turizm sohasida marketing faoliyati bilan shug‘ullanadi"],a:"B"},
{q:"Qaysi indeks sayohat yo‘nalishining barqarorligini ko‘rsatadi?",opts:["YaIM (GDP)","Sayyohlikni rivojlantirish global indeksi (TTDI)","Ishlab chiqarish menejmenti indeksi (PMI)","Mijozlar qoniqish indeksi (CSI)"],a:"B"},
{q:"Turizmda Environmental Impact Assessment (EIA) nima?",opts:["Biznesning atrof-muhitga ko‘rsatadigan ta’sirini baholash","Oziq-ovqat sifati va bahosini amalga oshirib borish","Turizm sohasiga oid nashrlar va jurnallarni tahlil qilish","Loyihalarni amalga oshirishda majburiy qo‘llaniladigan qo‘llanma bahosi"],a:"A"},
{q:"Eco lodge - deganda nima tushuniladi?",opts:["Wi-Fi bilan ta’minlangan mehmonxona","Atrof-muhitga kam zarar yetkazmaydigan yashash joyi","Suv havzasiga yaqin joylashgan turar joy","Baliqda ov qilish uchun maxsus joy"],a:"B"},
{q:"GSTC tamoyillariga ko‘ra, barqaror turizm korxonasi to‘rtta asosiy yo‘nalishni o‘z ichiga olishi kerak: boshqaruv, ijtimoiy ta’sir, madaniy ta’sir va…",opts:["Infratuzilma va logistic ta’sir","Iqtisodiyot va soliq ta’siri","Ekologik ta’sir","Huquqiy va axloqiy ta’sirlar"],a:"C"},
{q:"Qanday qilib GIS (geoinformatsion tizimlar) platformalari sayyohlik yo‘nalishining barqarorligini oshirishga eng katta foyda keltiradi?",opts:["Mehmonxonalarni 3D xaritada aks ettirish orqali","Turist oqimi, xavf va resurslarni fazoviy tahlil qilish orqali","Onlayn ekskursiyalar uchun chiptalarni bron qilish orqali","Barqaror turizm marketingini rivojlantirish orqali"],a:"B"},
{q:"Barqaror turizm kontekstida “geotizim xizmatlari” nimani anglatadi?",opts:["Geologik yo‘riqnomalar asosida ekskursiyalar","Ta’lim, estetik va ilmiy maqsadlarda tabiiy geotizimlar tomonidan ko‘rsatiladigan xizmatlar","Geotizimlarda muhandislik ishlari","Geologlar uchun asbob-uskunalarni ijaraga berish"],a:"B"},
{q:"Qaysi siyosiy yondashuv barqaror sayyohlik siyosatini ishlab chiqishda ekologik, ijtimoiy va iqtisodiy komponentlar o‘rtasidagi murakkab bog‘liqlikni hisobga oladi?",opts:["Chiziqli byudjetlashtirish","Texnologik determinizm","Integratsiyalashgan strategik rejalashtirish","Bozorning o‘z-o‘zini tartibga solishi"],a:"C"},
{q:"Quyidagi qaysi bayonot turizm kompaniyalarida EMS tizimlarining asosiy maqsadini aks ettiradi?",opts:["Texnik xizmat xarajatlarini kamaytirish orqali foyda oshirish","Mehmonxona xizmatlari sifati standartlarini joriy etish","Salbiy ekologik ta’sirlarning oldini olish bo‘yicha tizimli mexanizmni qurish","Yuqori talabga ega sayyohlik mahsulotlarini yaratish"],a:"C"},
{q:"Ekologik hududlarda ommaviy turizmning salbiy ta’sirini kamaytirish uchun eng ustuvor strategiya qaysi?",opts:["Ko‘proq mehmonxonalar yoki yo‘nalishlar qurish","Kamroq tanilgan yo‘nalishlarni ilgari surish","Tur operatorlari uchun soliqni kamaytirish","Yo‘nalishlarni ko‘paytirish va gidlarni doimiy o‘qitish"],a:"C"},

]

let idx = 0;
let correct = 0;
let wrong = 0;
const qnumEl = document.getElementById('qnum');
const qtextEl = document.getElementById('qtext');
const optionsEl = document.getElementById('options');
const form = document.getElementById('quizForm');
const typed = document.getElementById('typedAnswer');
const progress = document.getElementById('progress');
const resultBox = document.getElementById('resultBox');
const submitBtn = document.getElementById('submitBtn');

function renderQuestion() {
  if (idx >= questions.length) return;
  const q = questions[idx];
  qnumEl.textContent = `Savol ${idx + 1} / ${questions.length}`;
  qtextEl.textContent = q.q;
  optionsEl.innerHTML = '';
  const letters = ['A', 'B', 'C', 'D'];
  q.opts.forEach((opt, i) => {
    const id = `opt${i}`;
    const div = document.createElement('label');
    div.className = 'option';
    div.innerHTML = `<input name='choice' type='radio' value='${letters[i]}' id='${id}' /><span>${letters[i]}. ${opt}</span>`;
    optionsEl.appendChild(div);
  });
  progress.textContent = `${idx + 1} / ${questions.length}`;
  typed.value = '';
}

function showResults() {
  resultBox.style.display = 'block';
  resultBox.innerHTML = `<strong>Test yakunlandi</strong><div class='small' style='margin-top:8px'>To'g'ri javoblar: ${correct}<br> Noto'g'ri javoblar: ${wrong}<br> Umumiy: ${questions.length}</div>`;
  submitBtn.disabled = true;
  form.style.display = 'none';
  progress.textContent = `${questions.length} / ${questions.length}`;
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const chosenRadio = document.querySelector("input[name='choice']:checked");
  let answer = chosenRadio ? chosenRadio.value : typed.value.trim().toUpperCase();
  if (!answer || !['A', 'B', 'C', 'D'].includes(answer)) {
    alert('Iltimos A, B, C yoki D variantidan birini tanlang yoki yozing');
    return;
  }
  const correctAnswer = questions[idx].a;
  if (answer === correctAnswer) correct++; else wrong++;
  idx++;

  if (idx >= questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
});

typed.addEventListener('input', e => {
  const v = e.target.value.trim().toUpperCase();
  if (['A', 'B', 'C', 'D'].includes(v)) {
    const radio = document.querySelector(`input[value='${v}']`);
    if (radio) radio.checked = true;
  }
});

optionsEl.addEventListener('click', e => {
  const input = e.target.closest('label')?.querySelector('input');
  if (input) {
    typed.value = input.value;
  }
});

renderQuestion();
