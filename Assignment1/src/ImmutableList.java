public interface ImmutableList {
    public boolean equals(final Object other);
    public String toString();
    public int hashCode();
    public int length();
    public int sum(); // empty list sum is defined as 0
    public ImmutableList append(final ImmutableList other);
    public boolean contains(final int value);
} // ImmutableList
