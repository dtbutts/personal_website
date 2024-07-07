
document.getElementById("downResBut").addEventListener("click", resumeDownloadClick);



function resumeDownloadClick() {
    var resumeFile = document.createElement('a');
    resumeFile.href = "/assets/butts_dawson_resume.pdf";
    resumeFile.download = "butts_dawson_resume.pdf";
    document.body.appendChild(resumeFile);
    resumeFile.click();
    document.body.removeChild(resumeFile);
}
