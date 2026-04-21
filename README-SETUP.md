# 📁 Archivos de Configuración de Terminal

Todos los archivos relacionados con la configuración de terminal han sido movidos a:

```
../setup-terminal/
```

## 📂 Contenido del directorio setup-terminal:

### 🎨 Fuentes
- `CascadiaCode/` - Fuente Nerd Font completa
- `CascadiaCode.zip` - Archivo comprimido de la fuente

### ⚙️ Scripts de PowerShell
- `new-profile.ps1` - Configuración actual de Oh My Posh (tema Catppuccin)
- `install-fonts-simple.ps1` - Instalación de fuentes
- `setup-windsurf.ps1` - Configuración para Windsurf
- `temas-coloridos.ps1` - Prueba de diferentes temas
- Y otros scripts de configuración...

### 📝 Configuraciones
- `terminal-settings.json` - Configuración para Windows Terminal
- `windsurf-terminal-config.json` - Configuración para Windsurf
- `windsurf-settings.txt` - Instrucciones paso a paso

## 🚀 Para usar:

1. **Instalar fuentes:**
   ```powershell
   cd ../setup-terminal
   .\install-fonts-simple.ps1
   ```

2. **Configurar Oh My Posh:**
   ```powershell
   .\new-profile.ps1
   ```

3. **Configurar Windsurf:**
   - Copia el contenido de `windsurf-terminal-config.json` en la configuración de Windsurf

## 📋 Notas importantes:

- Estos archivos NO son parte del proyecto web
- Son solo para configuración del entorno de desarrollo
- Puedes eliminar todo el directorio `setup-terminal` si no necesitas la configuración personalizada

---

*Este archivo puede ser eliminado después de configurar tu terminal.*
