 document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 阻止頁面刷新 (Prevent refresh)

    // 獲取數值 (Get values)
    const name = document.getElementById('firstName').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    // Requirement: Alert to confirm submission content
    const confirmMessage = "Please confirm your submission:\n\n" +
                           "Name: " + name + "\n" +
                           "Email: " + email + "\n" +
                           "Subject: " + subject;

    alert(confirmMessage);

    // 顯示成功訊息 (Show inline success message) [cite: 77]
    document.getElementById('successMsg').style.display = 'block';
    this.reset(); // 重置表單 (Reset form)
});