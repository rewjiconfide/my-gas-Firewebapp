function doGet(e) {
  return HtmlService.createHtmlOutputFromFile('Index')
      .setTitle('โปรแกรมคำนวณปริมาตร')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
      .addMetaTag('viewport', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
}

// ฟังก์ชันคำนวณที่จะถูกเรียกจากหน้าเว็บ
function calculateVolumeGS(w, l, h, mode) {
  // ตรวจสอบความถูกต้องเบื้องต้น
  if (isNaN(w) || isNaN(l) || isNaN(h)) {
    throw new Error("ข้อมูลไม่ถูกต้อง");
  }

  let volume = 0;
  
  if (mode === 'general') {
    // สูตรที่ 1
    volume = w * l * h * 109.2;
  } else {
    // สูตรที่ 2
    volume = w * l * h * 130;
  }

  // ส่งผลลัพธ์กลับไปให้หน้าเว็บ
  return volume;
}
