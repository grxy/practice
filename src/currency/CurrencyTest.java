package currency;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CurrencyTest {
    private Currency sut;

    @Before
    public void initialize() {
        sut = new Currency(123456);
    }

    @Test
    public void testConstructorWithNoUnits() {
        sut = new Currency();

        assertEquals("$0.00", sut.toString());
    }

    @Test
    public void testConstructorWithUnits() {
        sut = new Currency(98765);

        assertEquals("$987.65", sut.toString());
    }

    @Test
    public void testFactor() {
        int factor = 1000;
        sut.setFactor(factor);

        assertEquals(factor, sut.getFactor());
    }

    @Test
    public void testSymbol() {
        String symbol = "X";
        sut.setSymbol(symbol);

        assertEquals(symbol, sut.getSymbol());
    }

    @Test
    public void testUnits() {
        int units = 12345;
        sut.setUnits(units);

        assertEquals(units, sut.getUnits());
    }

    @Test
    public void testToString() {
        assertEquals("$1,234.56", sut.toString());
    }

    @Test
    public void testToStringWithCustomFactor() {
        sut.setFactor(1000);

        assertEquals("$123.456", sut.toString());
    }

    @Test
    public void testToStringWithCustomSymbol() {
        sut.setSymbol("XX");

        assertEquals("XX1,234.56", sut.toString());
    }

    @Test
    public void testToStringNegativeUnits() {
        sut.setUnits(-123456);

        assertEquals("-$1,234.56", sut.toString());
    }

    @Test
    public void testAdd() {
        Currency c = new Currency(123);

        assertEquals("$1,235.79", sut.add(c).toString());
    }

    @Test
    public void testSubtract() {
        Currency c = new Currency(123);

        assertEquals("$1,233.33", sut.subtract(c).toString());
    }

    @Test
    public void testSubtractToLessThanZero() {
        Currency c = new Currency(123457);

        assertEquals("-$0.01", sut.subtract(c).toString());
    }
}
