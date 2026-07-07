from pathlib import Path

path = Path("src/i18n/translations.ts")
lines = path.read_text().splitlines(keepends=True)

def replace_line(line_num, new_content):
    lines[line_num - 1] = new_content

# --- EN block (landingpage) ---
replace_line(216, '          title: "SweetLar Mozambique",\n')
replace_line(217, '          description: "High-end custom-made furniture. Choose the color, the ideal size, and personalize your comfort.",\n')
replace_line(218, '          tags: ["React", "Tailwind CSS", "E-commerce"],\n')

# --- PT block (landingpage) ---
replace_line(382, '          title: "SweetLar Moçambique",\n')
replace_line(383, '          description: "Móveis sob medida de alto padrão. Escolha a cor, o tamanho ideal e personalize o seu conforto.",\n')
replace_line(384, '          tags: ["React", "Tailwind CSS", "E-commerce"],\n')

# --- FR block (landingpage) ---
replace_line(547, '          title: "SweetLar Mozambique",\n')
replace_line(548, '          description: "Meubles sur mesure haut de gamme. Choisissez la couleur, la taille ideale et personnalisez votre confort.",\n')
replace_line(549, '          tags: ["React", "Tailwind CSS", "E-commerce"],\n')

path.write_text("".join(lines))
print("Feito! Projeto SweetLar atualizado.")
