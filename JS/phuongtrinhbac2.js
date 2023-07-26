function GiaiPT() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let c = document.getElementById("c").value;
    let delta = Number(b ^ 2) - (4 * Number(a) * Number(c));
    if (delta < 0) {
        ketqua = "Phương trình vô nghiệm";
    } else if (delta == 0) {
        ketqua = "Phương trình có nghiệm kép x=" + -b / 2 * a;
    } else {
        let x1 = (-b - Math.sqrt(delta)) / 2 * a
        let x2 = (-b + Math.sqrt(delta)) / 2 * a
        ketqua = "Phương trình có 2 nghiệm x1=" + x1 + " và x2= " + x2;
    }
    document.getElementById("kq").innerHTML = ketqua;
}