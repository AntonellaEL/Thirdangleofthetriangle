import {describe, it , expect } from 'vitest'
import { tercerAngulo } from '../src/app.js'

    describe('tercerAngulo', () => {
        it('debería devolver 90 cuando los angulos son de 30,60', () => {
           expect(tercerAngulo(30,60)).toBe(90);

        });
        it('debería devolver 60 cuando los angulos son de 60,60', () => {
            expect(tercerAngulo(60,60)).toBe(60);
 
         });
         it('debería devolver 59 cuando los angulos son de 43,78', () => {
            expect(tercerAngulo(43,78)).toBe(59);
 
         });
         it('debería devolver 150 cuando los angulos son de 10,20', () => {
            expect(tercerAngulo(10,20)).toBe(150);
 
         });
  
  
  
 
})