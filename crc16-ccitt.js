/**
 * Calculate CRC16-CCIT checksum
 * Code ported to JavaScript from Java
 *
 * Original source:
 * http://introcs.cs.princeton.edu/java/51data/CRC16CCITT.java.html
 * CRC16-CCIT for 123456789 = 29b1
 *
 * Online calculator for testing:
 * http://zorc.breitbandkatze.de/crc.html
 */

function CRC16_CCITT(charach){
	var crc = 0xFFFF;
	var polynomial = 0x1021;
	var i=0, k=0, byte_val, bit, c15;
	
	for (; i < charach.length; i++) {
		byte_val = charach[i].charCodeAt(0);
		
		for (k=0; k < 8; k++) {
			bit = ((byte_val >> (7 - k) & 1) == 1);
			c15 = ((crc >> 15 & 1) == 1);
			crc <<= 1;
			if (c15 ^ bit) {
				crc ^=polynomial;
			}
		}
	}
	crc &= 0xffff;
	
	return crc.toString(16);
}
