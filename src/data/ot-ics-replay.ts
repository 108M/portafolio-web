import type { LocalizedString } from '@/types';

export interface ReplayStep {
  phase: number;
  script: string;
  tactic: LocalizedString;
  technique: { id: string; name: string; url: string };
  title: LocalizedString;
  narrative: LocalizedString;
  signatureId: number;
  signature: string;
  category: string;
  severity: number;
  count: number;
  first: string;
  last: string;
  example: Record<string, unknown>;
  mitigation: LocalizedString;
}

// Data below is extracted directly from a real captured run of the lab
// (detection/evidence/eve.json in the Laboratorio-OT-ICS repo), not simulated.
export const replaySteps: ReplayStep[] = [
  {
    phase: 1,
    script: '01_recon.py',
    tactic: { en: 'Discovery', es: 'Discovery' },
    technique: { id: 'T0846', name: 'Remote System Discovery', url: 'https://attack.mitre.org/techniques/T0846/' },
    title: {
      en: 'Unauthenticated Modbus recon',
      es: 'Reconocimiento Modbus sin autenticar',
    },
    narrative: {
      en: 'The attacker probes holding registers and coils 0-7 with no credentials at all, just to see what the device exposes. Modbus TCP has no authentication, so this is trivial.',
      es: 'El atacante sondea holding registers y coils 0-7 sin ninguna credencial, solo para ver qué expone el dispositivo. Modbus TCP no tiene autenticación, así que esto es trivial.',
    },
    signatureId: 1000001,
    signature: 'OT-LAB Posible reconocimiento Modbus (rafaga de peticiones)',
    category: 'Attempted Information Leak',
    severity: 2,
    count: 37,
    first: '2026-09-11T19:04:08.783280+0000',
    last: '2026-09-11T19:12:18.583153+0000',
    example: {
      timestamp: '2026-09-11T19:04:08.783280+0000',
      src_ip: '192.168.10.10',
      src_port: 39046,
      dest_ip: '192.168.20.10',
      dest_port: 502,
      proto: 'TCP',
      signature_id: 1000001,
    },
    mitigation: {
      en: 'Network segmentation and access control limiting which hosts can reach the Modbus device. In the segmented run of this lab, the attacker cannot reach port 502 at all — recon fails on the first packet.',
      es: 'Segmentación de red y control de acceso que limite qué hosts pueden alcanzar el dispositivo Modbus. En la ejecución segmentada de este laboratorio, el atacante no puede alcanzar el puerto 502 en absoluto — el recon falla en el primer paquete.',
    },
  },
  {
    phase: 2,
    script: '02_unauthorized_read.py',
    tactic: { en: 'Collection', es: 'Collection' },
    technique: { id: 'T0801', name: 'Monitor Process State', url: 'https://attack.mitre.org/techniques/T0801/' },
    title: {
      en: 'Unauthorized process read',
      es: 'Lectura no autorizada del proceso',
    },
    narrative: {
      en: 'Setpoint, level, pump and alarm are read straight off the PLC — intelligence on the process state, gathered from outside the legitimate HMI path.',
      es: 'Se leen setpoint, nivel, bomba y alarma directamente del PLC — inteligencia sobre el estado del proceso, obtenida fuera del camino legítimo del HMI.',
    },
    signatureId: 1000004,
    signature: 'OT-LAB Lectura no autorizada del proceso (holding registers)',
    category: 'Not Suspicious Traffic',
    severity: 3,
    count: 4,
    first: '2026-09-11T19:02:25.604538+0000',
    last: '2026-09-11T19:03:57.708669+0000',
    example: {
      timestamp: '2026-09-11T19:02:25.604538+0000',
      src_ip: '192.168.10.10',
      src_port: 50948,
      dest_ip: '192.168.20.10',
      dest_port: 502,
      proto: 'TCP',
      signature_id: 1000004,
    },
    mitigation: {
      en: 'Network access control and encrypted comms — native Modbus TCP supports neither. The Suricata rule flags reads coming from anything other than the HMI; segmentation prevents the compromised IT zone from reaching the PLC to read anything at all.',
      es: 'Control de acceso a la red y comunicaciones cifradas — Modbus TCP nativo no soporta ninguna de las dos. La regla de Suricata marca lecturas desde cualquier origen que no sea el HMI; la segmentación impide que la zona IT comprometida llegue a leer nada.',
    },
  },
  {
    phase: 3,
    script: '03_unauthorized_write_setpoint.py',
    tactic: { en: 'Impair Process Control', es: 'Impair Process Control' },
    technique: { id: 'T0836', name: 'Modify Parameter', url: 'https://attack.mitre.org/techniques/T0836/' },
    title: {
      en: 'Malicious setpoint write',
      es: 'Escritura maliciosa del setpoint',
    },
    narrative: {
      en: 'A malicious setpoint is written to holding register 0 (function code 6), bypassing the HMI entirely. The PLC control loop starts chasing the manipulated value. MITRE cites FrostyGoop — a real 2024 Modbus TCP attack in Ukraine — under this same technique family.',
      es: 'Se escribe un setpoint malicioso en el holding register 0 (function code 6), saltándose el HMI por completo. El bucle de control del PLC empieza a perseguir el valor manipulado. MITRE cita FrostyGoop — un ataque real a Modbus TCP en Ucrania en 2024 — bajo esta misma familia de técnicas.',
    },
    signatureId: 1000005,
    signature: 'OT-LAB Escritura no autorizada del setpoint (holding register, FC06)',
    category: 'Attempted Administrator Privilege Gain',
    severity: 1,
    count: 1,
    first: '2026-09-11T19:03:57.708572+0000',
    last: '2026-09-11T19:03:57.708572+0000',
    example: {
      timestamp: '2026-09-11T19:03:57.708572+0000',
      src_ip: '192.168.10.10',
      src_port: 42708,
      dest_ip: '192.168.20.10',
      dest_port: 502,
      proto: 'TCP',
      signature_id: 1000005,
      modbus: { function_code: 6, write_holding_registers: { address: 0, value: 1000 } },
    },
    mitigation: {
      en: 'Validate received parameters against safe ranges before applying them; keep the safety interlock separate from the control parameter. In this lab, the high-level interlock is not mapped to Modbus at all, so this attack cannot disable the safety function — only force anomalous behaviour within its limits.',
      es: 'Validar los parámetros recibidos contra rangos seguros antes de aplicarlos; separar la función de seguridad (interlock) del parámetro de control. En este laboratorio, el interlock de nivel alto no está mapeado a Modbus, así que este ataque no puede desactivar la función de seguridad — solo forzar un comportamiento anómalo dentro de sus límites.',
    },
  },
  {
    phase: 4,
    script: '04_unauthorized_write_coil.py',
    tactic: { en: 'Impair Process Control', es: 'Impair Process Control' },
    technique: { id: 'T0855', name: 'Unauthorized Command Message', url: 'https://attack.mitre.org/techniques/T0855/' },
    title: {
      en: 'Coil bombardment',
      es: 'Bombardeo del coil de la bomba',
    },
    narrative: {
      en: 'The pump coil is flooded with writes to force it ON, racing against the PLC scan cycle. MITRE cites the Dallas Siren incident — unauthorized activation of tornado alarm sirens — under this technique. This is the noisiest phase of the run: 197 alerts in under 4 seconds.',
      es: 'Se bombardea el coil de la bomba con escrituras para forzarlo a ON, compitiendo con el ciclo de scan del PLC. MITRE cita el incidente de las sirenas de Dallas — activación no autorizada de sirenas de alarma de tornado — bajo esta técnica. Es la fase más ruidosa de la ejecución: 197 alertas en menos de 4 segundos.',
    },
    signatureId: 1000006,
    signature: 'OT-LAB Comando no autorizado sobre un coil (FC05)',
    category: 'Attempted Administrator Privilege Gain',
    severity: 1,
    count: 197,
    first: '2026-09-11T19:04:08.620774+0000',
    last: '2026-09-11T19:04:12.622311+0000',
    example: {
      timestamp: '2026-09-11T19:04:08.620774+0000',
      src_ip: '192.168.10.10',
      src_port: 39046,
      dest_ip: '192.168.20.10',
      dest_port: 502,
      proto: 'TCP',
      signature_id: 1000006,
    },
    mitigation: {
      en: 'Devices receiving commands should verify them before acting; protocol-aware allow-listing at the network conduit. A Modbus-aware firewall at the conduit is the natural next step beyond the plain nftables segmentation used here.',
      es: 'Los dispositivos que reciben comandos deberían verificarlos antes de actuar; allow-listing de comandos de protocolo a nivel de red. Un firewall consciente de Modbus en el conducto sería el siguiente paso natural más allá de la segmentación nftables usada aquí.',
    },
  },
];

export const replayImpact: LocalizedString = {
  en: 'Observable consequence (T0831 — Manipulation of Control): the pump runs more than intended, the level approaches the safety limit, and the high-level alarm starts chattering — visible live on the HMI dashboard. The independent safety interlock caps the damage: this is process degradation and safety-function fatigue, not a physical overflow — a more realistic OT incident than an all-or-nothing failure.',
  es: 'Consecuencia observable (T0831 — Manipulation of Control): la bomba se enciende más de lo previsto, el nivel se acerca al límite de seguridad y la alarma de nivel alto empieza a activarse/desactivarse — visible en vivo en el HMI. El interlock de seguridad independiente limita el daño: es degradación del proceso y fatiga de la función de seguridad, no un desbordamiento físico — una representación más realista de un incidente OT que un fallo de todo o nada.',
};

export const replayTotals = {
  totalAlerts: 239,
  distinctSignatures: 4,
  windowStart: '2026-09-11T19:02:25.604538+0000',
  windowEnd: '2026-09-11T19:12:18.583153+0000',
};
