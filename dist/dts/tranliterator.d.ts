declare enum TransliterationDirection {
    /**
     * FORWARD means from &lt;source&gt; to &lt;target&gt; for a
     * transliterator with ID &lt;source&gt;-&lt;target&gt;.  For a transliterator
     * opened using a rule, it means forward direction rules, e.g.,
     * "A > B".
     */
    FORWARD = 0,
    /**
     * REVERSE means from &lt;target&gt; to &lt;source&gt; for a
     * transliterator with ID &lt;source&gt;-&lt;target&gt;.  For a transliterator
     * opened using a rule, it means reverse direction rules, e.g.,
     * "A < B".
     */
    REVERSE = 1
}
export declare class Transliterator {
    private readonly map;
    private readonly direction;
    constructor(map: {
        [key: string]: string;
    }, direction?: TransliterationDirection);
    transliterate(string: string): string;
}
export {};
