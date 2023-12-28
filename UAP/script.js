
function validatedForm(){
    var kode = document.getElementById("kode").value;
    var bbarang = document.getElementById("bbarang").value;

    var kodeError = document.getElementById("kodeError").value;
    var bbarangError = document.getElementById("bbarangError").value;

    kodeError.textContent = ""
    bbarangError.textContent = ""

    var isvalid = "true"
    
    if (kode === "") {
        kodeError.textContent ="Harap Masukkan Kode Barang!"
        isvalid = false;
    }
    if (bbarang === "") {
        kodeError.textContent ="Masukkan Banyaknya Barang yang Anda ingin Beli!"
        isvalid = false;
    }

    if (kode === "" || bbarang === "") {
        alert ("Harap isi Kode dan banyaknya barang")
    } else {
        alert ("Anda berhasil membeli barang")
    }
}