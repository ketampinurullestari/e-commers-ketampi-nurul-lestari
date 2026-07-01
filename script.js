// ===========================
// DATA KERANJANG
// ===========================
let cart = [];

// ===========================
// TAMBAH KE KERANJANG
// ===========================
function addToCart(name, price, sizeSelectId) {
    let size = document.getElementById(sizeSelectId).value;

    let item = {
        name: name,
        price: price,
        size: size,
        qty: 1
    };

    cart.push(item);
    renderCart();
}

// ===========================
// TAMPILKAN KERANJANG
// ===========================
function renderCart() {
    let cartList = document.getElementById("cart-items");
    let cartCount = document.getElementById("cart-count");
    let totalPrice = document.getElementById("total-price");

    cartList.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartList.innerHTML += `
            <div style="margin-bottom:15px; border-bottom:1px solid #eee; padding-bottom:10px;">
                <h4>${item.name}</h4>
                <p>Size: ${item.size}</p>
                <p>Rp ${item.price.toLocaleString()}</p>
                <button onclick="removeItem(${index})" style="background:red;color:white;border:none;padding:5px 10px;border-radius:5px;cursor:pointer;">
                    Hapus
                </button>
            </div>
        `;
    });

    cartCount.innerText = cart.length;
    totalPrice.innerText = "Rp " + total.toLocaleString();
}

// ===========================
// HAPUS ITEM
// ===========================
function removeItem(index) {
    cart.splice(index, 1);
    renderCart();
}

// ===========================
// TOGGLE SIDEBAR KERANJANG
// ===========================
function toggleCart() {
    document.querySelector(".cart-panel").classList.toggle("active");
}
function bukaCheckout() {
    if (cart.length === 0) {
        alert("Keranjang masih kosong!");
        return;
    }

    document.getElementById("checkout-page").style.display = "block";
}

function prosesCheckout() {
    let nama = document.getElementById("nama").value;
    let alamat = document.getElementById("alamat").value;
    let payment = document.getElementById("payment-method").value;

    if (nama === "" || alamat === "") {
        alert("Isi data dulu!");
        return;
    }

    alert(
        "Pembayaran Berhasil 🎉\n\n" +
        "Nama: " + nama + "\n" +
        "Alamat: " + alamat + "\n" +
        "Metode: " + payment + "\n\n" +
        "Terima kasih sudah belanja!"
    );

    // reset semua
    cart = [];
    renderCart();

    document.getElementById("checkout-page").style.display = "none";
}