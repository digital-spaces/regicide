<script setup lang="ts">
import CharacterCreation from '../../components/CharacterCreation.vue';
</script>

<template>
    <section id="characteristics">
        <h2>Characteristics</h2>
        <p>These are the primary building blocks of the character. All characters and creatures have eight characteristics, which give the basic information about the character’s physical, mental and spiritual capabilities. As well as being useful indicators of how to roleplay the character, they are the scores that skills are initially based upon, and when the characteristic is used in play the percentage value of the characteristic is rolled against using a D100 to work out if a character successfully completes a task in the game. A roll equal to or less than the characteristic percentage usually indicates that the characteristic has been used successfully.</p>
        <p>Possessing any score below 1 immediately kills the character.</p>
        <p>Your characteristic modifier is equal to <code>(characteristic/10) [round result down]</code>.</p>
        <p>The characteristics are:</p>
        <dl>
            <dt id="strength">Strength (STR):</dt>
            <dd>A character’s brute force, Strength affects the amount of damage he deals, what weapons he can wield effectively, how much he can lift and so on. Half your STR is added to damage for close combat and unarmed attacks.</dd>
            
            <dt id="dexterity">Dexterity (DEX):</dt>
            <dd>A character’s agility and co-ordination, Dexterity aids him in many physical actions, including combat and is also rolled to maintain balance. Half DEX is added to damage for ranged attacks.</dd>
            
            <dt id="quickness">Quickness (QUI):</dt>
            <dd>A character’s rate of movement and speed of reaction, Quickness affects how fast he is and helps him avoid damage.</dd>
            
            <dt id="constitution">Constitution (CON):</dt>
            <dd>A measure of the character’s health, Constitution affects how much damage he can sustain in combat, as well as his general resistance to disease and other illnesses.</dd>
            
            <dt id="intelligence">Intelligence (INT):</dt>
            <dd>A character’s ability to think around problems, analyze information and memorize instructions. It is a very useful characteristic for characters interested in becoming accomplished spellcasters.</dd>
            
            <dt id="power">Power (POW):</dt>
            <dd>Perhaps the most abstract characteristic, Power is a measure of the character’s life force, the strength of his willpower, resistance against hostile magic and is also rolled to resist attempts to influence the character against their will.</dd>
            
            <dt id="charisma">Charisma (CHA):</dt>
            <dd>This quantifies a character’s attractiveness, personality, and leadership potential. Characters with high Charisma are well-liked and easy to trust.</dd>
            
            <dt id="fate">Fate (FAT):</dt>
            <dd>Fate is a measure of the character’s good fortune, granting him benefits to his character all around. FAT is added to all skill percentages.</dd>
        </dl>

        <CharacterCreation head="1: Determine Characteristics" desc="Each characteristic starts with a value of 40. Two characteristics of your choice gain a +10 bonus." />

        <h3>Maximum Value of Characteristics</h3>
        <p>The maximum value, before magic spells and items, of any characteristic is 95.</p>
    </section>
</template>