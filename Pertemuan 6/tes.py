harga_barang = float(input("Masukan harga barang:"))
presentase_diskon = float(input("Masukan diskon :"))

diskon = harga_barang - (harga_barang * presentase_diskon /100)

print("harga setelah diskon = ", diskon)
