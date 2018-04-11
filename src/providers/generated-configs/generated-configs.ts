import { Injectable } from '@angular/core';

@Injectable()
export class GeneratedConfigsProvider {

  configs:any[] = [
    { title: 'Comprimento de onda central (nm)' , value: 660 },
    { title: 'Modo de Operação' , value: 'Continuous wave' },
    { title: 'Potência radiante média (mW)' , value: 100 }, 
    { title: 'Polarização ' , value: 'Random' }, 
    { title: 'Área na saída do laser (cm²)' , value: 1.9 }, 
    { title: 'Irradiancia na saída do laser (mW/cm²)' , value: 53 }, 
    { title: 'Perfil do feixe' , value: 'Multimode' }, 
    { title: 'Tamanho do feixe no alvo (cm²)' , value: 0 }, 
    { title: 'Irradiancia no alvo (mW/cm²)' , value: 0 }, 
    { title: 'Tempo de exposição por ponto (s)' , value: 120 }, 
    { title: 'Exposição radiante (J/cm²)' , value: 0 }, 
    { title: 'Energia radiante (J)', value: 0 }, 
    { title: 'Número de pontos irradiados' , value: 0 }, 
    { title: 'Tecnica de aplicação ', value: 'Contact' }, 
    { title: 'Número de tratamentos', value: 1 }, 
    { title: 'Frequencia dos tratamentos' , value: 'single treatment' }, 
    { title: 'Energia radiante total (J)', value: 0} 

  ]

  constructor() {}

  getConfigs(beamSize,irradiatedSpots){
    this.configs[7].value = beamSize;
    this.configs[12].value = irradiatedSpots;
    return this.configs;
  } 

}
