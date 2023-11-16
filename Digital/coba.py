import scipy.constants as const
from scipy.optimize import fsolve

# Fungsi untuk menghitung kecepatan aliran fluida menggunakan hukum Bernoulli
def bernoulli(V1, P1, rho, g, h):
    return V1**2 / 2 + P1 / (rho * g) + h

# Fungsi untuk menghitung debit aliran fluida menggunakan rumus kontinuitas
def kontinuitas(A1, V1, A2):
    return A1 * V1 - A2 * V2

# Parameter
P1 = 100000  # Tekanan awal (Pa)
V1 = 10  # Kecepatan awal (m/s)
rho = 1000  # Massa jenis fluida (kg/m^3)
g = const.g  # Percepatan gravitasi (m/s^2)
h = 5  # Ketinggian (m)

# Hitung kecepatan aliran V2 menggunakan hukum Bernoulli
V2 = fsolve(bernoulli, V1, args=(P1, rho, g, h))

# Luas penampang pipa
A1 = const.pi * (0.1)**2  # Penampang awal (m^2)
A2 = const.pi * (0.05)**2  # Penampang akhir (m^2)

# Hitung debit aliran menggunakan rumus kontinuitas
Q = A1 * V1

# Tampilkan hasil
print("Hasil Perhitungan Mekanika Fluida:")
print(f"Kecepatan aliran di tinggi {h} m: {V2[0]:.2f} m/s")
print(f"Debit aliran: {Q:.2f} m^3/s")

