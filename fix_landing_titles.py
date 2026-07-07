from pathlib import Path

path = Path("src/i18n/translations.ts")
lines = path.read_text().splitlines(keepends=True)

def replace_line(line_num, new_content):
    """line_num is 1-indexed, matching your editor/grep output"""
    lines[line_num - 1] = new_content

# --- EN block ---
replace_line(216, '          title: "Conversion Landing Page",\n')
replace_line(217, '          description: "A modern, responsive landing page built with a clean, conversion-focused layout.",\n')
replace_line(218, '          tags: ["React", "Tailwind CSS", "Responsive Design"],\n')

replace_line(222, '          title: "Startup Pitch Page",\n')
replace_line(223, '          description: "A landing page designed for a startup, focused on clarity and a strong call-to-action.",\n')
replace_line(224, '          tags: ["React", "Tailwind CSS", "Startup"],\n')

# --- PT block ---
replace_line(382, '          title: "Landing Page de Conversão",\n')
replace_line(383, '          description: "Landing page moderna e responsiva, com layout limpo focado em conversao.",\n')
replace_line(384, '          tags: ["React", "Tailwind CSS", "Design Responsivo"],\n')

replace_line(388, '          title: "Página de Apresentação para Startup",\n')
replace_line(389, '          description: "Landing page desenvolvida para uma startup, focada em clareza e call-to-action.",\n')
replace_line(390, '          tags: ["React", "Tailwind CSS", "Startup"],\n')

# --- FR block ---
replace_line(547, '          title: "Landing Page de Conversion",\n')
replace_line(548, '          description: "Landing page moderne et responsive, avec une mise en page epuree axee sur la conversion.",\n')
replace_line(549, '          tags: ["React", "Tailwind CSS", "Design Responsive"],\n')

replace_line(553, '          title: "Page de Présentation Startup",\n')
replace_line(554, '          description: "Landing page concue pour une startup, axee sur la clarte et l\'appel a l\'action.",\n')
replace_line(555, '          tags: ["React", "Tailwind CSS", "Startup"],\n')

path.write_text("".join(lines))
print("Feito! Ficheiro atualizado.")
