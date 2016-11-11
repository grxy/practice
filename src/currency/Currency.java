package currency;

import java.text.DecimalFormat;

public class Currency {
    private int factor = 100;
    private String symbol = "$";
    private int units = 0;

    public int getFactor() {
        return factor;
    }

    public void setFactor(int factor) {
        this.factor = factor;
    }

    public String getSymbol() {
        return symbol;
    }

    public void setSymbol(String symbol) {
        this.symbol = symbol;
    }

    public int getUnits() {
        return units;
    }

    public void setUnits(int units) {
        this.units = units;
    }

    public Currency() {}

    public Currency(int units) {
        this.setUnits(units);
    }

    public Currency add (Currency input) {
        units += input.getUnits();

        return this;
    }

    public Currency subtract (Currency input) {
        units -= input.getUnits();

        return this;
    }

    public String toString() {
        StringBuilder s = new StringBuilder();
        s.append(symbol);
        s.append("#,##0.");

        int zeroes = (int) Math.log10(factor);

        for (int i = 0; i < zeroes; i++) {
            s.append("0");
        }

        return new DecimalFormat(s.toString()).format((double) units / factor);
    }
}
