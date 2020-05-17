import React from "react";

const FormProduk = (props, postProduk) => {
  // console.log("regis3");
  postProduk = async () => {
    await props.addProduk();
    props.history.push("/profile");
    // console.log("regis1");
  };
  return (
    <form className="container" method="post" style={{ paddingBottom: "70px" }}>
      <div class="form-group">
        <label for="namaproduk">Nama Produk</label>
        <input
          type="text"
          class="form-control"
          id="namaproduk"
          placeholder="Nama Produk"
          name="namaProduk"
          onChange={(el) => props.changeInput(el)}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Tipe Produk</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="tipe"
          onChange={(el) => props.changeInput(el)}
        >
          <option value="1">Hand Phone</option>
          <option value="2">Laptop</option>
        </select>
      </div>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Deskripsi</label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          name="deskripsi"
          onChange={(el) => props.changeInput(el)}
        ></textarea>
      </div>
      <div class="form-group">
        <label>Harga</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Harga"
          name="harga"
          onChange={(el) => props.changeInput(el)}
        />
      </div>
      <div class="form-group">
        <label>Stock Tersedia</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Stock Tersedia"
          name="stock"
          onChange={(el) => props.changeInput(el)}
        />
      </div>
      <div class="form-group">
        <label>Terjual</label>
        <input
          type="number"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Terjual"
          name="sold"
          onChange={(el) => props.changeInput(el)}
        />
      </div>
      <div class="form-group">
        <label>Gambar</label>
        <input
          type="text"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Gambar"
          name="gambar"
          onChange={(el) => props.changeInput(el)}
        />
      </div>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Ingin memberikan Promo?</label>
        <select
          class="form-control"
          id="exampleFormControlSelect1"
          name="promo"
          type="boolean"
          onChange={(el) => props.changeInput(el)}
        >
          <option value="true">Ya</option>
          <option value="false">Tidak</option>
        </select>
        <div class="form-group" name="diskon">
          <label>Diskon</label>
          <input
            type="number"
            name="diskon"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Diskon"
            onChange={(el) => props.changeInput(el)}
          />
        </div>
      </div>
      <button
        className="btn btn-lg btn-primary btn-block text-uppercase"
        type="button"
        onClick={() => postProduk()}
      >
        Tambahkan Produk
      </button>
    </form>
  );
};
export default FormProduk;
