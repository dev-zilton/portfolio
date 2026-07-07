from pathlib import Path

path = Path("src/i18n/translations.ts")
lines = path.read_text().splitlines(keepends=True)

def replace_line(line_num, new_content):
    lines[line_num - 1] = new_content

# --- EN block (startuplanding) ---
replace_line(222, '          title: "Soluções Digitais MZ",\n')
replace_line(223, '          description: "Full corporate website for a digital agency in Mozambique, with dedicated sections for services, pricing, testimonials, FAQ and contact — built to convert visitors into clients.",\n')
replace_line(224, '          tags: ["Next.js", "React", "Tailwind CSS"],\n')

# --- PT block (startuplanding) ---
replace_line(388, '          title: "Soluções Digitais MZ",\n')
replace_line(389, '          description: "Website institucional completo para uma agencia digital mocambicana, com seccoes de servicos, precos, depoimentos, FAQ e contacto — pensado para converter visitantes em clientes.",\n')
replace_line(390, '          tags: ["Next.js", "React", "Tailwind CSS"],\n')

# --- FR block (startuplanding) ---
replace_line(553, '          title: "Soluções Digitais MZ",\n')
replace_line(554, '          description: "Site institutionnel complet pour une agence digitale mozambicaine, avec des sections dediees aux services, tarifs, temoignages, FAQ et contact — concu pour convertir les visiteurs en clients.",\n')
replace_line(555, '          tags: ["Next.js", "React", "Tailwind CSS"],\n')

path.write_text("".join(lines))
print("Feito! Projeto Soluções Digitais MZ atualizado.")
