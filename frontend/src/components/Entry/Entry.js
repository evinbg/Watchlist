import {
    EntryContainer,
    EntryName,
    EntryText,
    EntryTextSmall,
    EntryDivider,
    EntryItem,
    EntryDrop,
    EntryButtonContainer,
    EntrySubmit
} from "./EntryElements";

function Entry() {
  return (
    <EntryContainer>
        <EntryItem>
            <EntryName>Title:</EntryName>
            <EntryText></EntryText>
        </EntryItem>
        <EntryItem>
            <EntryName>Episodes:</EntryName>
            <EntryTextSmall></EntryTextSmall>
            <EntryDivider>/</EntryDivider>
            <EntryTextSmall></EntryTextSmall>
        </EntryItem>
        <EntryItem>
            <EntryName>Status:</EntryName>
            <EntryDrop>
                <option value="Watching">Watching</option>
                <option value="Completed">Completed</option>
                <option value="On-Hold">On-Hold</option>
                <option value="Dropped">Dropped</option>
                <option value="Plan to Watch">Plan to Watch</option>
            </EntryDrop>
        </EntryItem>
        <EntryItem>
            <EntryName>Score:</EntryName>
            <EntryDrop>
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
                <option value="7">7</option>
                <option value="6">6</option>
                <option value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
            </EntryDrop>
        </EntryItem>
        <EntryButtonContainer>
            <EntrySubmit>Submit</EntrySubmit>
        </EntryButtonContainer>
    </EntryContainer>
  );
}

export default Entry;