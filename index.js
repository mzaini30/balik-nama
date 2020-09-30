readline = require("readline")
rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
})
jalankan = () => {
	rl.question("Nama: ", nama => {
		console.log(nama.toLowerCase().split("").reverse().join(""))
		jalankan()
	})
}
jalankan()
