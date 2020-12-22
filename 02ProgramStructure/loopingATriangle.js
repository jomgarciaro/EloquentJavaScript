for (let i = 1; i <= 7; i++) {
    console.log("#".repeat(i));
} 
// Book's solution
for (let line = "#"; line.length < 8; line += "#") {
  console.log(line);
}